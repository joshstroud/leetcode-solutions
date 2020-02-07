// 7.4 Design a parking lot

// 1) Clarify ambiguity
// Assume hundreds of cars coming in and out every day. Hundreds of spots, which are coded by number, and paid for a computer terminal
// Assume some people have monthly passes for a particular spot
// Assume a ticket gate which handles both incoming and outgoing cars
// Assume spots cost $1/hour, unless you have a monthly spot
// Assume there is a sensor which detects whether spot is occupied, and that system automatically checks how long since the last car moved in
// Assume there are customers who can park and pay, can occupy a spot
// Define the terminal features and how they connect to other objects

// 2) Define objects
// Parking Lot. Has terminals, spaces, a lot name and id, current employees and manager
// Payment Terminal (several in lot). Has an id, location, parent lot, in use
// Parking Space (hundreds in terminal). Has a space number, location, whether it's occupied
// Ticket Gate (several in lot). Has an id, location, parent lot, in use
// Ticket. Has a ticket id and timestamp, parent customer
// Customer object is used for gate and terminal operations

// 3) Analyze relationships
// Parking lot has many Payment Terminals, has many Parking Spaces, has many Ticket Gates
// Parking Space has a Parking Lot
// Payment Terminal has a Parking Lot
// Ticket Gate has a Parking Lot
// Ticket Gate creates tickets, which are given to customers. Customer has a ticket, once they enter, until they leave.
// A ticket has a space (one to one)

// Note: use getters and setters instead of direct properties, per her example

// 4) Define actions
// ParkingLot: get number of spaces occupied, not occupied,

// Terminal: customer can pay for space, which sets paid on space

// Gate: customer can enter, customer can exit, can create ticket, can process ticket

// Space: can check availability, can set paid

// Ticket: can be paid

class ParkingLot {
  constructor(name, id, employees, manager, terminals, spaces, gates, tickets) {
    // set variables, make spaces a hash with number as key and space object as var, same with ticket numbers
  }

  get numberOccupiedSpaces() {
    return this.spaces.filter(space => !space.isAvailable()).length;
  }

  get numberFreeSpaces() {
    return this.spaces.filter(space => space.isAvailable()).length;
  }
}

class Terminal {
  constructor(id, location, lot) {
    // set variables
  }

  processPayment(ticketNum, spaceNum, numHours) {
    const space = lot.spaces[spaceNum];
    const ticket = lot.tickets[ticketNum];
    ticket.space = space;
    ticket.paid = true;
    space.setPaidTime(numHours);
  }
}

class Gate {
  constructor(id, location, lot, available) {}

  customerEnters(customer) {
    const newTicket = new Ticket();
    customer.ticket = newTicket;
    dispenseTicket(newTicket);
    openGate();
  }

  customerLeaves(customer) {
    if (customer.ticket.paid) {
      openGate();
    } else {
      askForPayment(customer);
    }
  }
}

class Ticket {
  constructor(id, customer) {
    this.paid = false;
    this.space = null;
  }
}

class Space {
  constructor(id, location) {
    this.ticket = null;
    this.occupied = false;
  }

  setPaidTime(numHours) {
    // handle callback when time is finished to lot
    this.timeLimit = numHours;
  }

  carEnters() {
    this.occupied = false;
  }

  carLeaves() {
    this.occupied = true;
  }
}
