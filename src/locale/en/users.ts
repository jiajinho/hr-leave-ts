export default {
  title: "List Users",

  form: {
    general: {
      title: "General Information",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      contactNo: "Contact no",
      nationalId: "National id",
      dob: "Date of birth",
      department: "Department",
      designation: "Designation",
      reportTo: "Report to",
      status: "Regular"
    },

    contact: {
      title: "Contact Information",
      country: "Country",
      stateRegion: "State/Region",
      city: "City",
      postalCode: "Postal Code",
    },

    others: {
      roles: {
        title: "Roles",
        field: "Roles"
      },
      permission: {
        title: "Additional Permissions",
        field: "Permissions"
      },
      workDay: {
        title: "Work Days",
        field: "Work Days"
      }
    }
  },

  revoke: {
    description: "Are you sure to revoke this user access?",
    button: "Revoke"
  }
}