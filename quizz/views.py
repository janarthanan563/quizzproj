from django.shortcuts import render
from .models import Quizzes
from django.views.generic import View,TemplateView
from django.http import JsonResponse

# Create your views here.
#def home_view(request):
   
 #   return render(request, 'quizz/main.html',{})

class MainView(TemplateView):
    template_name = 'quizz/main.html'

class QuizzJasonListView(View):
    def get(self , *args , **kwargs):
        print(kwargs)
        upper = kwargs.get('num_posts')
        lower = upper - 1 
        quizz = list(Quizzes.objects.values()[lower:upper])
        quizz_size = len(Quizzes.objects.all())
        size =True if upper >=quizz_size else False
        return JsonResponse({'data':quizz,'max':size ,'quizz_size':quizz_size},safe=False)
