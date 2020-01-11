from django.db import models
from heroes.models import Hero

class Record(models.Model):
    hero_1 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_1')
    hero_2 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_2')
    hero_3 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_3')
    hero_4 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_4')
    hero_5 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_5')
    hero_6 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_1')
    hero_7 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_2')
    hero_8 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_3')
    hero_9 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_4')
    hero_10 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_5')
    match_time = models.DateTimeField(auto_now_add=True)