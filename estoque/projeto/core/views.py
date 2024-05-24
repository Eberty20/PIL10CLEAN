from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def l10(request):
    return render(request, 'core/l10.html')