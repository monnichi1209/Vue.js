new Vue({
  el: '#app',
  data: {
    name: '',
    course: '',
    acceptancePeriod: '',
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  methods: {
    addStudent: function() {
      var newId = this.defaultLastId + 1;
      var newStudent = {
        id: newId,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod
      };
      this.students.push(newStudent);
      this.defaultLastId = newId;
      this.name = '';
      this.course = '';
      this.acceptancePeriod = '';
    }
  }
})
