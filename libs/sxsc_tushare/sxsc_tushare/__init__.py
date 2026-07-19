# -*- coding:utf-8 -*- 
import codecs
import os

__version__ = '1.2.1'
__author__ = 'tushare'

import os
os.environ.setdefault('PYTHONWARNINGS', 'ignore::yaml.YAMLLoadWarning')

"""
for jsdata api
"""
from sxsc_tushare.dataapi import (get_api, )

from sxsc_tushare.upass import (get_token, set_token)
