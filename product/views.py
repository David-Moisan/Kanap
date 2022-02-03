from django.shortcuts import render
from django.http import HttpResponse

def index(self, *args, **kwargs):
    return HttpResponse("<h1>Test of Product API</h1>")