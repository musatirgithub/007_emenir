# Generated by Django 4.1.4 on 2023-05-17 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_kazakaydi_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='araci',
            name='email',
            field=models.EmailField(blank=True, max_length=75, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='expert',
            name='email',
            field=models.EmailField(blank=True, max_length=75, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='sigorta',
            name='adres',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='sigorta',
            name='email',
            field=models.EmailField(blank=True, max_length=75, null=True, unique=True),
        ),
    ]
