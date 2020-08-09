from django.urls import path 
from API import views

urlpatterns = [
    path('hello-view',views.HelloApiView.as_view()),
]
