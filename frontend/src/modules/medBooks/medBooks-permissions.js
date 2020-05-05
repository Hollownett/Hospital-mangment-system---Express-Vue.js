import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class medBooksPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.medBooksRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.medBooksImport,
    );
    this.medBooksAutocomplete = permissionChecker.match(
      Permissions.values.medBooksAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.medBooksCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.medBooksEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.medBooksDestroy,
    );
  }
}
