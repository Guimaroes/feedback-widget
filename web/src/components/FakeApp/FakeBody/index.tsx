import { FakeCard } from './FakeCard';

export function FakeBody() {
    return (
        <div className="w-full mb-24">
            <div className="m-6 px-6 h-[124px] bg-zinc-800 rounded-lg flex items-center justify-center text-center">
                <p className="text-zinc-400">Experimente enviar um feedback de um <i>bug</i> na aplicação 🐛</p>
            </div>
            <div className="grid grid-cols-1 gap-6 px-6">
                <FakeCard />
                <FakeCard />
                <FakeCard />
            </div>
        </div>
    )
}