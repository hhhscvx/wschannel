from django.shortcuts import render


def index(request):
    return render(request, 'graph.html', {'text': 'Real-Time Graph'})
