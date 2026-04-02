// src/components/Button/utils.tsx
import { isValidElement, type ReactNode } from 'react';
import Icon from '@/components/Icon';
import type { IconSize } from '@/integrations/icons';
import type { ButtonSize } from './Button';

export type GradientPillButtonVariant = 'primary' | 'secondary';

function mapButtonSizeToIconSize(size?: ButtonSize): IconSize {
  return size ?? 'md';
}

export function renderButtonIcon(
  icon: string | ReactNode | undefined,
  size?: ButtonSize
): ReactNode {
  if (!icon) return null;

  const iconSize = mapButtonSizeToIconSize(size);
  if (isValidElement(icon)) return icon;
  if (typeof icon === 'string') return <Icon icon={icon} size={iconSize} />;
  return null;
}

export function getGradientPillButtonClasses(
  variant: GradientPillButtonVariant
): string {
  const shared = 'btn-gradient-pill';

  return variant === 'primary'
    ? `${shared} btn-gradient-pill-primary`
    : `${shared} btn-gradient-pill-secondary`;
}
