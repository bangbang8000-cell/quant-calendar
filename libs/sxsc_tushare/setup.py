from setuptools import setup, find_packages

setup(
    name='sxsc_tushare',
    version='1.2.11',
    description='山西证券 Tushare 数据接口',
    packages=find_packages(),
    install_requires=[
        'pandas',
        'requests',
        'lxml',
        'simplejson',
        'websocket-client',
    ],
    python_requires='>=3.8',
)
