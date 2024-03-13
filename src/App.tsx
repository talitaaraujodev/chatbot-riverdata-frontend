import React, { useState } from 'react';
import { Header } from './components/Header';
import { ArrowUp } from 'lucide-react';
import { chatService } from './services/ChatService';
import { Loader } from './components/Loader';
import { Cards } from './components/Cards';

function App() {
  const [message, setMessage] = useState<string>('');
  const [conversation, setConversation] = useState<Array<string>>([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  async function handleSendMessage() {
    setConversation((prev: any) => {
      return [...prev, { name: 'User', message: message }];
    });
    setShowLoading(true);
    await chatService
      .sendPrompt(message)
      .then((res: any) => {
        if (res) {
          setConversation((prev: any) => {
            return [...prev, { name: 'IA', message: res.response }];
          });
          setShowLoading(false);
          setMessage('');
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
  function handleChangeMessage(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setMessage(value);
  }

  return (
    <React.Fragment>
      <div className="fixed flex w-full h-full">
        <div className="relative flex flex-col w-full flex-1">
          <Header />
          <div className="flex flex-col justify-between h-full w-full flex-1 bg-white overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col items-center justify-center ">
              {conversation.length === 0 ? (
                <Cards />
              ) : (
                conversation.map((item: any, index: any) => {
                  const isUser = item.name === 'User';
                  const nextItem: any = conversation[index + 1];
                  return (
                    <div className="flex flex-col mt-2" key={index}>
                      {isUser ? (
                        <strong className="mt-2 pb-1">Você</strong>
                      ) : (
                        <div className="flex items-center mt-2 pb-1">
                          <strong className="mt-2 pb-1">Chat AWS</strong>
                        </div>
                      )}
                      <div
                        className={
                          isUser
                            ? 'text-white bg-[#778beb] text-base w-[28rem] rounded-xl py-2 px-3'
                            : 'text-[#000] bg-[#f1f2f6] text-base w-[28rem] rounded-xl py-2 px-3'
                        }
                      >
                        {item.message}
                      </div>
                      {showLoading && !nextItem ? <Loader /> : null}
                    </div>
                  );
                })
              )}
            </div>
            <div className="flex items-center justify-center py-6 mt-1">
              <input
                type="text"
                placeholder="Digite sua pergunta aqui..."
                className="p-4 rounded-lg border w-[34rem] mr-2 outline-0 focus:border-[#778beb]"
                value={message}
                onChange={handleChangeMessage}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                tabIndex={-1}
              />
              <button
                type="button"
                className={
                  showLoading
                    ? 'disabled:opacity-70 bg-[#778beb] rounded-lg p-4 transition-all cursor-not-allowed'
                    : 'bg-[#778beb] rounded-lg p-4 hover:cursor-pointer hover:opacity-95 transition-all'
                }
                onClick={handleSendMessage}
                disabled={showLoading}
              >
                <ArrowUp color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
