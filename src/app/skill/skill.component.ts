import {Component, OnInit} from '@angular/core';
import {Skill} from './skill';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: Skill[];
  constructor(private appService: AppConfigService) {
  }

  // tslint:disable-next-line:typedef
  toggleSkills(caller) {
    const skillsContent = document.getElementsByClassName('skills_content');
    const itemClass = caller.parentNode.className;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills_content skills_close';
    }

    if (itemClass === 'skills_content skills_close') {
      caller.parentNode.className = 'skills_content skills_open';
    }
  }

  // tslint:disable-next-line:typedef
  showSkillsResource(){
    this.appService.getSkillResource().subscribe(( data: Skill[]) => this.skills = data);
  }

  ngOnInit(): void {
    this.showSkillsResource();
  }

}
