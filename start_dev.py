import subprocess
import sys
import os
from pathlib import Path

def start_backend():
    print("Starting backend...")
    backend_path = Path("backend")
    if sys.platform == "win32":
        subprocess.Popen(["start", "cmd", "/k", "python", "start.py"], cwd=backend_path, shell=True)
    else:
        subprocess.Popen(["python", "start.py"], cwd=backend_path)

def start_frontend():
    print("Starting frontend...")
    frontend_path = Path("frontend")
    if sys.platform == "win32":
        subprocess.Popen(["start", "cmd", "/k", "npm", "start"], cwd=frontend_path, shell=True)
    else:
        subprocess.Popen(["npm", "start"], cwd=frontend_path)

def main():
    try:
        # Iniciar backend
        start_backend()
        
        # Esperar un poco antes de iniciar el frontend
        import time
        time.sleep(2)
        
        # Iniciar frontend
        start_frontend()
        
    except Exception as e:
        print(f"Error during startup: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 