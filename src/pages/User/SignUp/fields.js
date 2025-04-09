const infoField = [
  {
    label: 'Fullname',
    name: 'fullname',
    type: 'text',
    placeholder: 'Nguyen Van A',
    required: true,
    error: 'oke',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'nva@gmail.com',
    required: true,
  },
  {
    label: 'Phone number',
    name: 'phone',
    type: 'tel',
    placeholder: '+84 72727...',
    required: true,
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
    placeholder: '123 Main St',
    required: true,
  },
];

const accountField = [
  {
    label: 'Username',
    name: 'username',
    type: 'text',
    placeholder: 'username123',
    required: true,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '******',
    required: true,
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    placeholder: '******',
    required: true,
  },
];

export { infoField, accountField };
