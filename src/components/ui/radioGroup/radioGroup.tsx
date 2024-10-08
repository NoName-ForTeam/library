import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'
import * as React from 'react'
import styles from './radioGroup.module.scss'

/**
 * RadioGroup component
 *
 * A component that allows users to select a single option from a list of choices.
 *
 * @component
 * @example
 * <RadioGroup defaultValue="option1">
 *   <RadioGroupItem value="option1" id="option1" />
 *   <RadioGroupItem value="option2" id="option2" />
 * </RadioGroup>
 */

// убрала лишние комментарии

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...rest }, ref) => {
  const classNames = {
    root: styles.root,
  } as const

  return (
    <RadioGroupPrimitive.Root className={clsx(classNames.root, className)} {...rest} ref={ref} />
  )
})

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

/**
 * RadioGroupItem component
 *
 * An individual radio button within a RadioGroup.
 *
 * @component
 * @example
 * <RadioGroupItem value="option1" id="option1" />
 */

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...rest }, ref) => {
  const classNames = {
    item: styles.item,
    indicator: styles.indicator,
  } as const
  return (
    <RadioGroupPrimitive.Item ref={ref} className={clsx(classNames.item, className)} {...rest}>
      <RadioGroupPrimitive.Indicator className={classNames.indicator} />
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
