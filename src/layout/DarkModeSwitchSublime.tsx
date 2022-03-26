import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import useDarkMode from '../hooks/useDarkMode'

export const DarkModeSwitchSublime: React.FC = () => {
  const [enabled, setEnabled] = useDarkMode()

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          className={`${enabled ? 'animate-dark' : 'animate-light'} rounded-full`}
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        >
          {enabled ? (
            <MoonIcon
              className="ease block h-10 w-10 text-slate-300 transition duration-200 hover:text-slate-100"
              aria-hidden="true"
            />
          ) : (
            <SunIcon
              className="ease block h-10 w-10 text-orange-300 transition duration-200 hover:text-orange-400"
              aria-hidden="true"
            />
          )}
        </Switch>
      </div>
    </Switch.Group>
  )
}
