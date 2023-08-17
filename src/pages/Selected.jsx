import React, { useContext, useState } from 'react'
import AppContext from '../AppContext';

const Selected = () => {
    const [activeTab, setActiveTab] = useState('noun'); // Default to 'noun'
    const [isPlaying, setIsPlaying] = useState(false); // Track whether audio is playing

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const playAudio = () => {
        if (selectedInformation.length > 0) {
            const phoneticsWithAudio = selectedInformation[0].phonetics.filter(phonetic => phonetic.audio);
            if (phoneticsWithAudio.length > 0) {
                const audioUrl = phoneticsWithAudio[0].audio;
                const audio = new Audio(audioUrl);

                audio.onended = () => {
                    setIsPlaying(false);
                };

                if (!isPlaying) {
                    audio.play();
                } else {
                    audio.pause();
                }

                setIsPlaying(!isPlaying);
            }
        }
    };

    const { selectedInformation } = useContext(AppContext);

    return (
        <div>
            {selectedInformation.length === 0 ? (
                <p className="text-center">Type a word above to get its meaning.</p>
            ) : (
                <div>
                    {selectedInformation[0].phonetics && selectedInformation[0].phonetics.some(phonetic => phonetic.audio) && (
                        <span className='flex items-center gap-3'>
                            <img
                                src={isPlaying ? "/pause-btn.png" : "play-btn.png"}
                                alt={isPlaying ? 'Pause Button' : 'Play Button'}
                                className='w-5 my-4 cursor-pointer'
                                onClick={playAudio}
                            />
                            <span>{selectedInformation[0].phonetic}</span>
                        </span>
                    )}
                    <div className="flex gap-4 text-sm">
                        <button
                            className={`tab-button px-3 py-1 rounded ${activeTab === 'noun' ? 'active-tab text-gray-300 bg-gray-800' : ' bg-gray-200 text-gray-800'}`}
                            onClick={() => handleTabChange('noun')}
                        >
                            Noun
                        </button>
                        <button
                            className={`tab-button px-3 py-1 rounded ${activeTab === 'verb' ? 'active-tab text-gray-300 bg-gray-800' : ' bg-gray-200 text-gray-800'}`}
                            onClick={() => handleTabChange('verb')}
                        >
                            Verb
                        </button>
                    </div>
                    <div className="mt-4">
                        {selectedInformation.map((entry, index) => (
                            <div key={index}>
                                {entry.meanings.map((meaning, meaningIndex) => (
                                    <div key={meaningIndex}>
                                        {meaning.partOfSpeech === activeTab && (
                                            <div>
                                                <h3 className="text-lg font-semibold capitalize">{meaning.partOfSpeech}</h3>
                                                <ul className="list-disc pl-6">
                                                    {meaning.definitions.map((def, defIndex) => (
                                                        <li key={defIndex}>
                                                            {def.definition}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Selected