from django import forms
from .models import Gasstation

class GassstationCreateForm(forms.ModelForm):
    class Meta:
        model = Gasstation
        fields =[
            'name',
            'description',
            'location'
        ]

class RawProductForm(forms.Form):
    name = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "Your title"}))
    description = forms.CharField(
                                  label='',
                                  widget=forms.Textarea(
                                                        attrs={
                                                               "class": "new-class-name two",
                                                               "rows": 20,
                                                               "cols": 120,
                                                               "id": "my-id-for-textarea",
                                                               "placeholder": "Your description"
                                                        }
                                                        )
                                  )
    location = forms.CharField(initial='uruguay')