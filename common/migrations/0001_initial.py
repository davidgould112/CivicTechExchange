# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-09-22 17:58
from __future__ import unicode_literals

from django.db import migrations, models
from common.models.tags import import_tags_from_csv


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag_name', models.CharField(max_length=100)),
                ('display_name', models.CharField(max_length=200)),
                ('caption', models.CharField(max_length=500)),
                ('category', models.CharField(max_length=200)),
                ('subcategory', models.CharField(max_length=200)),
                ('parent', models.CharField(max_length=100)),
            ]
        ), migrations.RunPython(import_tags_from_csv)
    ]
