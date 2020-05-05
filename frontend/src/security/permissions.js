import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.administrator
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.administrator
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.administrator
          
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.administrator
        
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.administrator
          
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.administrator],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.administrator],
      },
      medBooksImport: {
        id: 'medBooksImport',
        allowedRoles: [
          roles.administrator
         
        ],
      },
      medBooksCreate: {
        id: 'medBooksCreate',
        allowedRoles: [
          roles.administrator
        
        ],
        allowedStorageFolders: ['medBooks'],
      },
      medBooksEdit: {
        id: 'medBooksEdit',
        allowedRoles: [
          roles.administrator
        
        ],
        allowedStorageFolders: ['medBooks'],
      },
      medBooksDestroy: {
        id: 'medBooksDestroy',
        allowedRoles: [
          roles.administrator
        
        ],
        allowedStorageFolders: ['medBooks'],
      },
      medBooksRead: {
        id: 'medBooksRead',
        allowedRoles: [
          roles.administrator, roles.doctor
      
        ],
      },
      medBooksAutocomplete: {
        id: 'medBooksAutocomplete',
        allowedRoles: [
          roles.administrator
         

        ],
      },

      bookImport: {
        id: 'bookImport',
        allowedRoles: [
          roles.administrator
         
        ],
      },
      bookCreate: {
        id: 'bookCreate',
        allowedRoles: [
          roles.administrator
        
        ],
        allowedStorageFolders: ['patient'],
      },
      bookEdit: {
        id: 'bookEdit',
        allowedRoles: [
          roles.administrator
     
        ],
        allowedStorageFolders: ['patient'],
      },
      bookDestroy: {
        id: 'bookDestroy',
        allowedRoles: [
          roles.administrator
         
        ],
        allowedStorageFolders: ['patient'],
      },
      bookRead: {
        id: 'bookRead',
        allowedRoles: [
          roles.administrator,roles.doctor
        
        ],
      },
      bookAutocomplete: {
        id: 'bookAutocomplete',
        allowedRoles: [
          roles.administrator, roles.doctor
       
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
