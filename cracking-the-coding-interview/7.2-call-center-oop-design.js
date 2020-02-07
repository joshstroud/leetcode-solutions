// Design a call center
// Three levels of employees: respondent, manager, director
// Calls start at respondent level, and escale up.
// Design lasses and data structures
// Implement disptachCall which assigns call to first available employee

// 1) Analyze ambiguity
// Imagine a Sprint call center with hundreds of respondents, dozens of managers, and several directors
// Assume a respondent can escalate to next available manager, and any manager can escalate to next available director

// 2) Identify Objects
// Call Center
// Employee: subclassed by Respondent, Manager, Director
// Call

// 3) Analyze relationships
// Call center has many employees, as well as respondents, managers, and directors individually
// Call object is passed to employees

// 4) Actions
// Call Center:
// properties: array of employees, array of respondents, managers, directors
// #constructor(employees) - creates call center with employees, sorted into respondents, managers, directors
// #dispatchCall(call) - assigns call to first available employee

// Employee
// properties: available, level, callCenter, type
// #constructor(level, callCenter)
// #takeCall - returns promise that sets availability to false when call is finished
//

// Respondent
// #constructor(level, callCenter)
// #takeCall

// Manager
// #constructor(level, callCenter)
// #takeCall

// Director
// #constructor(level, callCenter)
// #takeCall

// assume unique functions for each respondent, manager, director, which means we need seperate classes

const RESPONDENT_LEVEL = 'respondent';
const MANAGER_LEVEL = 'manager';
const DIRECTOR_LEVEL = 'director';

class CallCenter {
  constructor(employees) {
    this.employees = employees;
    this.respondents = [];
    this.managers = [];
    this.directors = [];

    employees.forEach(employee => {
      switch (employee.type) {
        case RESPONDENT_LEVEL:
          this.respondents.push(employee);
          return;
        case MANAGER_LEVEL:
          this.managers.push(employee);
          return;
        case DIRECTOR_LEVEL:
          this.directors.push(employee);
      }
    });
  }

  dispatchCall(call) {
    const availableRespondent = this._findAvailableEmployee(respondents);

    if (availableRespondent) {
      availableRespondent.takeCall(call);
    } else {
      const availableManager = this._findAvailableEmployee(managers);
      if (availableManager) {
        availableManager.takeCall(call);
      } else {
        const availableDirector = this._findAvailableEmployee(directors);
        if (availableDirector) {
          availableDirector.takeCall(call);
        } else {
          throw new Error('No one available to take call.');
        }
      }
    }
  }

  _findAvailableEmployee(employees) {
    return employees.filter(employee => employee.available)[0];
  }
}

class Call {
  constructor(info) {
    this.info = info;
  }
}

class Employee {
  constructor(level, callCenter) {
    this.level = level;
    this.callCenter = callCenter;
    this.available = true;
  }

  takeCall(call, callHandler) {
    this.available = true;

    const callPromise = new Promise(resolve => {
      this.available = false;
      callHandler(call);
      // do call handling logic
      resolve(call);
    });

    callPromise.then(call => this.finishCall(call));
    return callPromise;
  }

  finishCall(call) {
    this.available = true;
  }
}

class Respondent extends Employee {
  constructor(callCenter) {
    super(RESPONDENT_LEVEL, callCenter);
  }

  takeCall(call) {
    super.takeCall(call, this.respondentCallHandler);
  }

  respondentCallHandler(call) {
    // unique respondent call handling
  }

  // unique respondent code
}

class Manager extends Employee {
  constructor(callCenter) {
    super(MANAGER_LEVEL, callCenter);
  }

  takeCall(call) {
    super.takeCall(call, this.managerCallHandler);
  }

  managerCallHandler(call) {
    // unique manager call handling
  }

  // unique manager code
}

class Director extends Employee {
  constructor(callCenter) {
    super(DIRECTOR_LEVEL, callCenter);
  }

  takeCall(call) {
    super.takeCall(call, this.directorCallHandler);
  }

  directorCallHandler(call) {
    // unique director call handling
  }

  // unique director code
}
