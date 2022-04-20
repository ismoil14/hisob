import { useState } from 'react';
import { Modal, Button, Group,TextInput  } from '@mantine/core';
import InpuyMy from "./inputmy"
export default function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
        <TextInput
      placeholder="Your name"
      label="Full name"
      required
    />
   
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group> <InpuyMy />
    </>
  );
}