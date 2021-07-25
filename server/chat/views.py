from django.http import JsonResponse, HttpResponseRedirect
from django.urls import reverse
from chat.models import Room
from django.forms.models import model_to_dict


def room_list_view(request):

    if request.method == 'GET':

        rooms = Room.objects.all().values('id', 'name')
        room_list = list(rooms)

        return JsonResponse(room_list, safe=False)

    elif request.method == 'POST':

        name = request.POST.get('name', 'gays room')
        description = request.POST.get('description', 'only gays allowed')
        private = request.POST.get('private', '')
        password = request.POST.get('password', '1234')

        room = Room.objects.create(
            name=name,
            description=description,
            private=private,
            password=password,
        )
        new_room = model_to_dict(room)

        return JsonResponse(new_room, safe=False)
        

def room_detail_view(request,id):

    if request.method == 'DELETE':

        delete_room = Room.objects.filter(id=id).delete()
        return HttpResponseRedirect(reverse('index'))


    else:
        room = Room.objects.get(id=id)
        room_detail = model_to_dict(room)

        return JsonResponse(room_detail, safe=False)

