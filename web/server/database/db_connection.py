from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from functools import lru_cache
from config import get_settings

# Create Base class
Base = declarative_base()

# Cache engine creation
_engine = None
_SessionLocal = None


@lru_cache(maxsize=1)
def get_engine():
    """Get or create database engine with connection pooling"""
    global _engine
    if _engine is None:
        settings = get_settings()
        connect_args = {}
        if settings.database_url.startswith("sqlite"):
            connect_args = {"check_same_thread": False}
        else:
            # Connection pooling for non-SQLite databases
            connect_args = {
                "pool_size": 10,
                "max_overflow": 20,
                "pool_pre_ping": True,
                "pool_recycle": 3600
            }
        
        _engine = create_engine(
            settings.database_url,
            connect_args=connect_args,
            echo=False
        )
    return _engine


def get_session_local():
    """Get or create SessionLocal class"""
    global _SessionLocal
    if _SessionLocal is None:
        engine = get_engine()
        _SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    return _SessionLocal


def get_db():
    """Dependency to get database session"""
    SessionLocal = get_session_local()
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()