from django.urls import path
from .views.note import NoteListCreate, NoteDelete
from .views.poles import CreatePoleView

urlpatterns = [
    path("notes/", NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pi>", NoteDelete.as_view(), name="delete-note"),
    path("pole", CreatePoleView.as_view(), name="add-pole")
]