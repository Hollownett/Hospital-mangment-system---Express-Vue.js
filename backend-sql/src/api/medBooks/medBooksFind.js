const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const medBooksService = require('../../services/medBooksService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.medBooksRead,
    );

    const payload = await new medBooksService(req).findById(
      req.params.id,
    );

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
