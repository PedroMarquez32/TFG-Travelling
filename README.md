# TFG-Travelling - Travel Agency Platform

A full-stack travel agency platform built with FastAPI (Backend) and Angular (Frontend).

## 🚀 Project Structure

```bash
TFG-Travelling/
├── frontend/          # Angular frontend application
├── backend/          # FastAPI backend application
└── docs/            # Project documentation
```

## 🛠️ Technology Stack

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- JWT Authentication
- Docker

### Frontend
- Angular 17
- Angular Material
- TypeScript
- SCSS
- Angular Animations

## 🎨 Design System
- Primary Blue: #4DA8DA
- Turquoise: #3DBFBC
- Sand: #F6E7D7
- Coral: #FF6B6B
- Dark Gray: #3A3A3C

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- Docker & Docker Compose
- PostgreSQL

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
docker-compose up -d
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
ng serve
```

The application will be available at:
- Frontend: http://localhost:4200
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 📝 Documentation
- [Architecture Overview](docs/ARCHITECTURE.md)
- [API Documentation](docs/API.md)
- [Development Guidelines](docs/DEVELOPMENT.md)

## 👥 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 