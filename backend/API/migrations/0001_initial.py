# Generated by Django 3.1 on 2020-08-08 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creator', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('content', models.TextField()),
            ],
        ),
    ]
