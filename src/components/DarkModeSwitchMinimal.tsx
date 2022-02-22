import React from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import useDarkMode from '../hooks/useDarkMode'

export const DarkModeSwitchMinimal: React.FC = () => {
  const [enabled, setEnabled] = useDarkMode()

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch checked={enabled} onChange={() => setEnabled(!enabled)} className="rounded-full">
          {enabled ? (
            <MoonIcon
              className="ease block h-6 w-6 text-sky-300 transition duration-100 hover:text-sky-200"
              aria-hidden="true"
            />
          ) : (
            <SunIcon
              className="ease block h-6 w-6 text-orange-400 transition duration-100 hover:text-orange-300"
              aria-hidden="true"
            />
          )}
        </Switch>
      </div>
    </Switch.Group>
  )
}
