import pandas as pd

def summarize(df: pd.DataFrame):
    return df.describe() and df.info()
