from django.urls import path
from projeto.core import views as v

app_name = 'core'

urlpatterns = [
    path('', v.index, name='index'),
    path('produto/', v.ProdutoList.as_view(), name='produto_list'),
    path('teste/', v.teste, name='teste'),
    path('compras/', v.compras, name='compras'),
    path('produto/<int:pk>/', v.produto_detail, name='produto_detail'),
    path('produto/add/', v.ProdutoCreate.as_view(), name='produto_add'),
    path('produto/add2/', v.produto_add, name='produto_add2'),
    path('produto/<int:pk>/edit/', v.ProdutoUpdate.as_view(), name='produto_edit'),
    path('produto/<int:pk>/json/', v.produto_json, name='produto_json'),
    path('produto/import/csv/', v.import_csv, name='import_csv'),
    path('produto/export/csv/', v.export_csv, name='export_csv'),
    path('produto/import/xlsx/', v.import_xlsx, name='import_xlsx'),
    path('produto/export/xlsx/', v.exportar_produtos_xlsx, name='export_xlsx'),
    path('produto/import/csv/pandas/', v.import_csv_with_pandas, name='import_csv_with_pandas'),
    path('excluir-notificacao/<int:notificacao_id>/', v.excluir_notificacao, name='excluir_notificacao'),
]