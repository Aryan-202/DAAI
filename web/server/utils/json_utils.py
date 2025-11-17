import pandas as pd
import numpy as np
from typing import Any, Dict, List, Union
import json


def json_serialize(obj: Any) -> Any:
    """
    Recursively serialize Python objects to JSON-compatible types (optimized)
    """
    # Fast path for common types
    if obj is None:
        return None
    if isinstance(obj, (bool, int, float, str)):
        return obj
    if isinstance(obj, dict):
        return {str(key): json_serialize(value) for key, value in obj.items()}
    if isinstance(obj, (list, tuple)):
        return [json_serialize(item) for item in obj]
    
    # NumPy types (check before pandas to avoid double conversion)
    if isinstance(obj, (np.integer, np.int32, np.int64)):
        return int(obj)
    if isinstance(obj, (np.floating, np.float32, np.float64)):
        if np.isnan(obj) or np.isinf(obj):
            return None
        return float(obj)
    if isinstance(obj, np.bool_):
        return bool(obj)
    if isinstance(obj, np.ndarray):
        return obj.tolist()
    
    # Pandas types
    if pd.isna(obj):  # Handle pandas NaN, NaT, etc.
        return None
    if isinstance(obj, pd.Timestamp):
        return obj.isoformat()
    
    # Datetime objects
    if hasattr(obj, 'isoformat'):
        return obj.isoformat()
    
    # Objects with __dict__
    if hasattr(obj, '__dict__'):
        return json_serialize(obj.__dict__)
    
    # Fallback
    try:
        return str(obj)
    except:
        return None


def dataframe_to_json_safe(df: pd.DataFrame, orient: str = "records") -> List[Dict]:
    """
    Convert DataFrame to JSON-serializable list of dictionaries (optimized)
    """
    # Use pandas built-in conversion with proper handling
    try:
        # Convert to dict first
        if orient == "records":
            data_dict = df.to_dict(orient="records")
        else:
            data_dict = df.to_dict(orient=orient)
        
        # Clean the data recursively
        cleaned_data = json_serialize(data_dict)
        return cleaned_data
    except Exception:
        # Fallback: convert to string and parse
        return json_serialize(df.to_dict(orient=orient))