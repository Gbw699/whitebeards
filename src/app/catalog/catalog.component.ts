import { Component, OnInit } from '@angular/core';

import { UserRepositoryService } from '../services/user-repository.service';
import { CatalogRepositoryService } from '../catalog/catalog-repository.service';
import { IClass } from './class.model';
import { FilterClassesService } from './filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];
  orderByField: string = '';

  constructor(
    public userRepository: UserRepositoryService,
    private catalogRepository: CatalogRepositoryService,
    private filterClasses: FilterClassesService
  ) {}

  ngOnInit() {
    this.catalogRepository.getCatalog().subscribe((classes: IClass[]) => {
      this.classes = classes;
      this.applyFilter('');
    });
  }

  updateFirstProfessor() {
    this.visibleClasses = [
      { ...this.visibleClasses[0], professor: 'Lucarion' },
      ...this.visibleClasses.slice(1),
    ];
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId).subscribe({
      error: (err) => {
        console.error(err);
        classToEnroll.processing = false;
      },
      complete: () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      },
    });
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId).subscribe({
      error: (err) => {
        console.error(err);
        classToDrop.processing = false;
      },
      complete: () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      },
    });
  }

  applyFilter(filter: string) {
    this.visibleClasses = this.filterClasses.applyFilter(filter, this.classes);
  }
}
