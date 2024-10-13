// Create an advanced user management system with the following requirements, focusing on class inheritance, method overriding, 
// data validation, and managing user-specific permissions. Use ES6 classes, this, and super.
// Requirements:
// 1. User Class:
//     Create a User class that takes name, email, and age as properties.
//     Add validation to ensure:
//         The name is at least 3 characters long.
//         Basic email validation.
//         The age is a number greater than 0.
//     Include a method getDetails() that returns a formatted string with the user’s name, email, and age.
//     Add a method changeEmail(newEmail) that updates the email address only if it's the proper email.
// 2. Admin Class:
//     Create an Admin class that extends the User class.
//     Add property role (default is 'admin') and permissions (an array of actions like ['edit', 'delete', 'view']).
//     Override the getDetails() method to include the role and permissions.
//     Add a method, addPermission(permission), that allows new permissions to be added to the Admin's list, and removePermission(permission) to remove permissions.
// 3. Extended Requirements for Both Classes:
//     Implement an isValidEmail() method that validates email format (simple regex).
//     Override the changeEmail() method in the Admin class to log any email changes to the console with a custom message: "Admin [name] changed their email to [newEmail]".
//     Use this and super appropriately to ensure modularity and reusability between the two classes.
// 4. Demonstration:
//     Create instances of both User and Admin.
//     For the User instance:
//         Test email validation and update functionality.
//         Log the user's details on the console using getDetails().
//     For the Admin instance:
//         Add and remove permissions.
//         Change the email (and log the message) and show updated details including permissions. 

class User {
  constructor(name, email, age) {
    if (name.length < 3) {
      throw new Error('Name must be at least 3 characters long.');
    }
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format.');
    }
    if (typeof age !== 'number' || age <= 0) {
      throw new Error('Age must be a number greater than 0.');
    }

    this.name = name;
    this.email = email;
    this.age = age;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
  }

  changeEmail(newEmail) {
    if (this.isValidEmail(newEmail)) {
      this.email = newEmail;
    } else {
      throw new Error('Invalid email format.');
    }
  }
}

class Admin extends User {
  constructor(name, email, age) {
    super(name, email, age); // Call parent constructor
    this.role = 'admin';
    this.permissions = ['edit', 'delete', 'view'];
  }

  getDetails() {
    return `${super.getDetails()}, Role: ${this.role}, Permissions: ${this.permissions.join(', ')}`;
  }

  addPermission(permission) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
  }

  removePermission(permission) {
    const index = this.permissions.indexOf(permission);
    if (index > -1) {
      this.permissions.splice(index, 1);
    }
  }

  changeEmail(newEmail) {
    if (this.isValidEmail(newEmail)) {
      super.changeEmail(newEmail); // Call parent method
      console.log(`Admin ${this.name} changed their email to ${newEmail}`);
    } else {
      throw new Error('Invalid email format.');
    }
  }
}

// Demo
try {
  const user = new User('John Doe', 'john@example.com', 25);
  console.log(user.getDetails()); // Name: John Doe, Email: john@example.com, Age: 25

  user.changeEmail('john.doe@example.com');
  console.log(user.getDetails()); // Name: John Doe, Email: john.doe@example.com, Age: 25

  const admin = new Admin('Jane Admin', 'jane.admin@example.com', 30);
  console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, edit, delete

  admin.addPermission('manage');
  console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, edit, delete, manage

  admin.removePermission('edit');
  console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, delete, manage

  admin.changeEmail('jane.admin@newdomain.com');
} catch (error) {
  console.error(error.message);
}

