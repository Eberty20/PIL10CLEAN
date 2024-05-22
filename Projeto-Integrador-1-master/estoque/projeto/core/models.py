from django.db import models
from projeto.produto.models import Produto, Categoria

class TimeStampedModel(models.Model):
    created = models.DateTimeField(
        'criado em',
        auto_now_add=True,
        auto_now=False
    )
    modified = models.DateTimeField(
        'modificado em',
        auto_now_add=False,
        auto_now=True
    )

    class Meta:
        abstract = True

def estoque_baixo(self):
        return self.estoque <= self.estoque_minimo