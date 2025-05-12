from django.shortcuts import render
from .models import Project, Skill

def home(request):
    Projects = Project.objects.all()
    skills = Skill.objects.all()
    return render(request, 'portfolio/home.html', {'projects': Projects, 'skills': skills})

def projecrt_detail(request, project_id):
    project = Project.objects.get(id=project_id)
    return render(request, 'portfolio/project_detail.html', {'project': project})

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        # Here you would typically save the contact form data to the database
        # or send an email notification.
    return render(request, 'portfolio/contact.html')

