import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeArray: any[] = [];
  updateSuccess: boolean = false;
  deletingEmployeeId: number | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const employeeData = localStorage.getItem("employees");
    if (employeeData != null) {
      this.employeeArray = JSON.parse(employeeData);
    }
  }

  onEdit(id: number) {
    this.router.navigate(['register-employee', id]);
  }

  onDelete(id: number) {
    this.deletingEmployeeId = id;
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) {
      modal.classList.add('show');
    }
  }

  deleteEmployee() {
    if (this.deletingEmployeeId !== null) {
      const index = this.employeeArray.findIndex(m => m.id == this.deletingEmployeeId);
      this.employeeArray.splice(index, 1);
      localStorage.setItem('employees', JSON.stringify(this.employeeArray));
      this.cancelDelete();
    }
  }

  cancelDelete() {
    this.deletingEmployeeId = null;
    const modal = document.getElementById('confirmDeleteModal');
    if (modal) {
      modal.classList.remove('show');
    }
  }

  showUpdateSuccessMessage() {
    this.updateSuccess = true;
    setTimeout(() => {
      this.updateSuccess = false;
    }, 3000);
  }
}
