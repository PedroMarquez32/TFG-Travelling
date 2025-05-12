import subprocess
import sys
import time
import os
from dotenv import load_dotenv
import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

def install_dependencies():
    print("Installing dependencies...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])

def wait_for_db(params, max_retries=5, delay=2):
    retries = 0
    while retries < max_retries:
        try:
            conn = psycopg2.connect(**params, database="postgres")
            conn.close()
            return True
        except psycopg2.OperationalError:
            retries += 1
            print(f"Database connection attempt {retries}/{max_retries} failed. Retrying in {delay} seconds...")
            time.sleep(delay)
    return False

def setup_database():
    print("Setting up database...")
    load_dotenv()
    
    db_name = os.getenv("POSTGRES_DB", "postgres")
    
    # Database connection parameters
    db_params = {
        "user": os.getenv("POSTGRES_USER", "postgres"),
        "password": os.getenv("POSTGRES_PASSWORD", "postgres"),
        "host": os.getenv("POSTGRES_SERVER", "localhost"),
        "port": os.getenv("POSTGRES_PORT", "5432")
    }
    
    # Wait for database to be ready
    print("Waiting for database to be ready...")
    if not wait_for_db(db_params):
        print("Could not connect to the database. Please make sure PostgreSQL is running.")
        sys.exit(1)
    
    try:
        # Connect to the database
        conn = psycopg2.connect(**db_params, database=db_name)
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cur = conn.cursor()
        
        # Execute init.sql if it exists
        if os.path.exists("init.sql"):
            print(f"Executing init.sql on database '{db_name}'...")
            try:
                with open("init.sql", "r", encoding="utf-8") as f:
                    sql_content = f.read()
                    # Modificar las referencias a travel_agency en el script
                    sql_content = sql_content.replace("travel_agency", db_name)
                    cur.execute(sql_content)
                print("Database initialization completed successfully!")
            except Exception as e:
                print(f"Error executing init.sql: {e}")
                # Continuar a pesar del error, ya que las tablas podrían ya existir
        
        cur.close()
        conn.close()
        
    except Exception as e:
        print(f"Error setting up database: {e}")
        sys.exit(1)

def start_server():
    print("Starting FastAPI server...")
    subprocess.run(["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"])

def main():
    try:
        # Asegurarse de que estamos en el directorio correcto
        os.chdir(os.path.dirname(os.path.abspath(__file__)))
        
        # Instalar dependencias
        install_dependencies()
        
        # Configurar la base de datos
        setup_database()
        
        # Iniciar el servidor
        start_server()
        
    except Exception as e:
        print(f"Error during startup: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 