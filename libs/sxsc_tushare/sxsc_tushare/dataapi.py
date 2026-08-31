# -*- coding:utf-8 -*- 
"""
pro init 
Created on 2019/12/23
@author: Tushare
"""
from __future__ import division

from functools import partial

import pandas as pd
import requests

from sxsc_tushare import upass

PRICE_COLS = ['open', 'close', 'high', 'low', 'pre_close']
FORMAT = lambda x: '%.4f' % x
FREQS = {'D': '1DAY',
         'W': '1WEEK',
         'Y': '1YEAR',
         }
FACT_LIST = {
           'tor': 'turnover_rate',
           'turnover_rate': 'turnover_rate',
           'vr': 'volume_ratio',
           'volume_ratio': 'volume_ratio',
           'pe': 'pe',
           'pe_ttm': 'pe_ttm',
        }


class DataApi:

    __token = ''
    __http_url = ''
    __http_url_nw = 'http://10.5.42.55:7172'          # 内网地址
    __http_url_gw = 'http://221.204.19.233:7172'        # 公网地址

    def __init__(self, token, timeout=50, env='prd'):
        """
        Parameters
        ----------
        token: str
            API接口TOKEN，用于用户认证
        timeout: int
            请求接口，等待时间，秒为单位
        env: str   (prd/qa)
            对应接口的部署环境
        """
        self.__token = token
        self.__timeout = timeout
        if env == 'prd':
            self.__http_url = self.__http_url_gw
        else:
            self.__http_url = self.__http_url_nw

    def query(self, api_name, fields='', **kwargs):
        """ 走通用API配置接口 """
        data = {
            'api_name': api_name,
            'token': self.__token,
            'params': kwargs,
            'fields': fields
        }
        url = self.__http_url
        resp = requests.post(url, json=data, timeout=self.__timeout, headers={'Connection': 'close'})
        if resp.status_code != 200:
            raise Exception(resp.text)

        result = resp.json()
        if result['code'] != 0:
            raise Exception(result['msg'])
        data = result['data']
        columns = data['fields']
        items = data['items']
        return pd.DataFrame(items, columns=columns)

    def __getattr__(self, name):
        return partial(self.query, name)


def get_api(token='', timeout=60, env='prd'):
    """
    初始化pro API,第一次可以通过ts.set_token('your token')来记录自己的token凭证，临时token可以通过本参数传入
    """
    if token == '' or token is None:
        token = upass.get_token()
    if token == '' or token is None:
        raise Exception('api init error.')

    return DataApi(token, timeout=timeout, env=env)


def test_api():
    api = get_api()
    df = api.dayan_test()
    assert len(df) >= 0


def test_ongdb():
    import os
    from sxsc_tushare.upass import TOKEN_F_P
    csv_file = os.path.join(os.path.expanduser('~'), TOKEN_F_P)
    if not os.path.exists(csv_file):
        return
    df = pd.read_csv(csv_file)
    username = df.loc[0]['ongdb-user']
    password = df.loc[0]['ongdb-pass']
    api = get_api()
    df = api.ongdb(
        username=username,
        password=password,
        url="http://graph.jsfund.cn/pro-1/db/data/transaction/commit",
        query='MATCH p=(n)--() RETURN p,n LIMIT 10;'
    )
    print(df)
    assert len(df) >= 0


def test_email():
    api = get_api()
    df = api.email(
        tos=['lidy03@jsfund.cn'],
        title='xxxx',
        content="啊手动阀手动阀手动阀"
    )
    print(df)
    assert len(df) >= 0
