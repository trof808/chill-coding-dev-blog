import { Link } from 'gatsby';
import * as React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io'

const NvimUsefulResources = () => {
    return <main>
        <div className='p-2 flex flex-col gap-2'>
            <span className='text-2xl flex gap-2 items-center'><Link to='/krd-beer-conf'><IoMdArrowRoundBack /></Link>Neovim полезные ссылки</span>
            <span className='text-xl'>Lua Language</span>
            <ul className='px-2'>
                <li>
                    <a href='https://tylerneylon.com/a/learn-lua/' target='_blank' className='underline text-[#395B64] font-bold'>Lua in 15 minutes</a>
                </li>
            </ul>

            <span className='text-xl'>Tutorials and docs</span>
            <ul className='px-2'>
                <li>
                    <a href='https://github.com/kuator/nvim-lua-guide-ru' target='_blank' className='underline text-[#395B64] font-bold'>Начало работы с Lua в Neovim</a>
                </li>
            </ul>

            <span className='text-xl'>Готовые Конфигурации</span>
            <ul className='px-2'>
                <li>
                    <a href='https://github.com/craftzdog/dotfiles-public' target='_blank' className='underline text-[#395B64] font-bold'>Craftzdog</a>
                </li>
            </ul>
        </div>
    </main>
}

export default NvimUsefulResources;
