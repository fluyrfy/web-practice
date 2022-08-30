from tkinter.tix import Form
from django import forms


class UploadFileForm(forms.Form):
    file = forms.FileField()
