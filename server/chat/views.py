from django.http import JsonResponse
from chat.models import Room
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def room_list_view(request):

    if request.method == 'GET':

        rooms = Room.objects.all().values('id', 'name', 'description', 'private')
        room_list = list(rooms)

        return JsonResponse(room_list, safe=False)

    elif request.method == 'POST':

        name = request.POST.get('name', 'gays room')
        description = request.POST.get('description', 'only gays allowed')
        private = request.POST.get('private', '')=='true'
        password = request.POST.get('password', '')
        
        try:
            room = Room(
                name=name,
                description=description,
                private=private,
                password=password,
            )
            room.clean()
            room.save()
        except Exception as e:
            s = str(e)
            return JsonResponse(s, safe=False)

        new_room = model_to_dict(room)

        return JsonResponse(new_room, safe=False)
        
@csrf_exempt
def room_detail_view(request,id):

    if request.method == 'DELETE':

        delete_room = Room.objects.filter(id=id).delete()
        return JsonResponse({})


    else:
        room = Room.objects.filter(id=id).first()
        if room:
            room_detail = model_to_dict(room, exclude=['password'])
        else:
            room_detail={}

        return JsonResponse(room_detail, safe=False)

