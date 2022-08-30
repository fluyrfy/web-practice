from configparser import MAX_INTERPOLATION_DEPTH
from tkinter.tix import Form
from django import forms


class UploadFileForm(forms.Form):
    file = forms.FileField()


class EmailForm(forms.Form):
    file = forms.FileField(required=True)
    to = forms.EmailField(max_length=50)
    cc = forms.EmailField(max_length=50, required=False)
    title = forms.CharField(max_length=50)
    content = forms.CharField(
        max_length=500, widget=forms.Textarea(attrs={"rows": 10, "cols": 60})
    )
