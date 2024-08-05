import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../../../../apps/auth/src/users/models';

export const getCurrentUserByContext = (
  context: ExecutionContext,
): UserDocument => {
  const request = context.switchToHttp().getRequest();
  return request.user;
};

export const CurrentUser = createParamDecorator(
  (_data, context: ExecutionContext) => getCurrentUserByContext(context),
);
