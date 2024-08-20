import { rounding, spacing } from "~/constants/theme";

export const getButtonToken = () => ({
  gap: {
    small: spacing.xs,
    medium: spacing.sm,
    large: spacing.sm,
  },

  height: {
    small: spacing["3xl"],
    medium: spacing["4xl"],
    large: spacing["5xl"],
  },
  radius: {
    square: rounding.md,
    rounded: rounding.full,
  },
  verticalPadding: {
    small: spacing.xs,
    medium: spacing.sm,
    large: `calc(${spacing.xxs} + ${spacing.sm})`,
  },
  horizontalPadding: {
    small: spacing.md,
    medium: spacing.lg,
    large: spacing.xl,
  },
});
