export const fullNameValidation = {
  required: "Name is required",
  pattern: {
    value: /^[A-Za-z\s'-]+$/,
    message: "Please enter a valid name",
  },
  minLength: {
    value: 1,
    message: "Name must be at least 1 character long",
  },
  maxLength: {
    value: 50,
    message: "Name must be at most 50 characters long",
  },
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please enter a valid email",
  },
  minLength: {
    value: 5,
    message: "Email must be at least 5 characters long",
  },
  maxLength: {
    value: 100,
    message: "Email must be at most 100 characters long",
  },
};

export const dateValidation = {
  required: "Date is required",
  pattern: {
    value: /^\d{4}-\d{2}-\d{2}$/,
    message: "Please enter a valid date in YYYY-MM-DD format",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/, // Requires at least one uppercase, one lowercase, one digit, and one special character
    message:
      "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character",
  },
};

export const ticketDescriptionValidation = {
  required: "Description is required",
  minLength: {
    value: 10,
    message: "Description must be at least 10 characters long",
  },
  maxLength: {
    value: 500,
    message: "Description must be at most 500 characters long",
  },
};
