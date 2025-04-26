'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';
import Input from '../ui/input';
import Label from '../ui/label';
import Select from '../ui/select';

interface FormState {
  query?: string;
  maxReadyTime?: string;
  cuisine?: string;
}

const initialForm: FormState = {
  query: '',
  maxReadyTime: '',
  cuisine: '',
};

const options = ['African', 'British', 'German', 'Mexican', 'Indian'];

export default function Form() {
  const [form, setForm] = useState<FormState>(initialForm);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (form.query) params.append('query', form.query);
    if (form.cuisine) params.append('cuisine', form.cuisine);
    if (form.maxReadyTime) params.append('maxReadyTime', form.maxReadyTime);

    router.push(`/recipes?${params.toString()}`);
  };

  const disabled = Object.values(form).every((value) => value === '');

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <Label htmlFor="query" primary>
          Search
        </Label>

        <Input
          type="text"
          name="query"
          id="query"
          placeholder="e.g., Pasta, Salad..."
          primary
          value={form.query}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="cuisine" primary>
          Cuisine
        </Label>

        <Select
          options={options}
          defaultOption="Select cuisine"
          name="cuisine"
          id="cuisine"
          primary
          value={form.cuisine}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="maxReadyTime" primary>
          Max Ready Time (minutes)
        </Label>

        <Input
          type="number"
          min={1}
          max={1000}
          name="maxReadyTime"
          id="maxReadyTime"
          placeholder="e.g., 30"
          primary
          value={form.maxReadyTime}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
      </div>

      <Button disabled={disabled} />
    </form>
  );
}
