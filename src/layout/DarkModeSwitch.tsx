import React from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeSwitch = () => {
  const [enabled, setEnabled] = useDarkMode()

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label passive className="mr-2">
          {enabled ? (
            <MoonIcon className="ease block h-6 w-6 text-gray-300 transition duration-200" aria-hidden="true" />
          ) : (
            <SunIcon className="ease block h-6 w-6 text-orange-400 transition duration-200" aria-hidden="true" />
          )}
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className={`${
            enabled ? 'bg-blue-300' : 'bg-slate-400'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}

export default DarkModeSwitch
