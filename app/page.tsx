export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-20 text-center">
        <p className="text-teal-300 font-semibold">MainStreet RP</p>
        <h1 className="mt-4 text-5xl font-bold">
          Entertainment Division Training
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Training page uutele tiimiliikmetele, kes hakkavad hostima evente,
          kasutama party systemit ja hoidma city aktiivsena.
        </p>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3">
        <Card title="Division Purpose">
          Loome lõbusaid RP kogemusi, tõstame city aktiivsust ja toome community kokku.
        </Card>

        <Card title="Expectations">
          Ole professionaalne, aktiivne, loominguline, õiglane ja positiivne.
        </Card>

        <Card title="Event Workflow">
          Idee → approval → ettevalmistus → reklaam → hostimine → feedback.
        </Card>
      </section>

      <section className="px-6 pb-16">
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <h2 className="text-3xl font-bold">Party Commands</h2>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li><b className="text-teal-300">/party</b> — city-wide event notification</li>
            <li><b className="text-teal-300">/partynext</b> — next queued invite</li>
            <li><b className="text-teal-300">/partyend</b> — end current invite</li>
            <li><b className="text-teal-300">/partyqueue</b> — list queue</li>
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="rounded-2xl bg-teal-500 p-6 text-black">
          <h2 className="text-3xl font-bold">Example /party Message</h2>
          <p className="mt-4">
            🏎️ Downtown Car Meet starting in 10 minutes! Cash prizes available.
          </p>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
      <h2 className="text-2xl font-bold text-teal-300">{title}</h2>
      <p className="mt-4 text-gray-300">{children}</p>
    </div>
  );
}
