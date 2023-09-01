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
                <li>
                    <a href='https://hyperpolyglot.org/more' target='_blank' className='underline text-[#395B64] font-bold'>Hyperpolyglot - Сравнение синтаксиса языков</a>
                </li>
            </ul>

            <span className='text-xl'>Tutorials and docs</span>
            <ul className='px-2'>
                <li>
                    <a href='https://github.com/kuator/nvim-lua-guide-ru' target='_blank' className='underline text-[#395B64] font-bold'>Начало работы с Lua в Neovim</a>
                </li>
            </ul>

            <span className='text-xl'>Где искать плагины</span>
            <ul className='px-2'>
                <li>
                    <a href='https://neovimcraft.com/' target='_blank' className='underline text-[#395B64] font-bold'>Neovimcraft</a>
                </li>
                <li>
                    <a href='https://vimawesome.com/' target='_blank' className='underline text-[#395B64] font-bold'>Vimawesome</a>
                </li>
            </ul>
            <span className='text-xl'>Список плагинов</span>
            <ul className='px-2'>
                <li>
                    <a href='https://github.com/wbthomason/packer.nvim' target='_blank' className='underline text-[#395B64] font-bold'>Packer - Менеджер пакетов</a>
                </li>
                <li>
                    <a href='https://github.com/nvim-tree/nvim-tree.lua' target='_blank' className='underline text-[#395B64] font-bold'>Nvim tree - file explorer</a>
                </li>
                <li>
                    <a href='https://github.com/nvim-tree/nvim-web-devicons' target='_blank' className='underline text-[#395B64] font-bold'>Nvim web dev icons - иконки файлов и папок</a>
                </li>
                <li>
                    <a href='https://github.com/nvim-lualine/lualine.nvim' target='_blank' className='underline text-[#395B64] font-bold'>Lualine - информационная строка</a>
                </li>
                <li>
                    <a href='https://github.com/akinsho/bufferline.nvim' target='_blank' className='underline text-[#395B64] font-bold'>Bufferline - настройка табов для открытых файлов</a>
                </li>
                <li>
                    <a href='https://github.com/nvim-telescope/telescope.nvim' target='_blank' className='underline text-[#395B64] font-bold'>Telescope - Поиск по файлам</a>
                </li>
                <li className='flex gap-2'>
                    <a href='https://github.com/williamboman/mason.nvim' target='_blank' className='underline text-[#395B64] font-bold'>Mason</a>
                    <a href='https://github.com/williamboman/mason-lspconfig.nvim' target='_blank' className='underline text-[#395B64] font-bold'>Mason lspconfig</a>
                    <a href='https://github.com/neovim/nvim-lspconfig' target='_blank' className='underline text-[#395B64] font-bold'>Nvim lsp config</a>
                    <span>(Для установки Language server protocol)</span>
                </li>
                <li>
                    <a href='https://github.com/windwp/nvim-ts-autotag' target='_blank' className='underline text-[#395B64] font-bold'>nvim ts autotag - для автозакрытия тегов html</a>
                </li>
                <li>
                    <a href='https://github.com/windwp/nvim-autopairs' target='_blank' className='underline text-[#395B64] font-bold'>Nvim autopairs - для закрытия скобок</a>
                </li>
                <li className='flex gap-2'>
                    <a href='https://github.com/hrsh7th/nvim-cmp' target='_blank' className='underline text-[#395B64] font-bold'>nvim cmp</a>
                    <a href='https://github.com/hrsh7th/cmp-nvim-lsp' target='_blank' className='underline text-[#395B64] font-bold'>cmp nvim lsp</a>
                    <span>(Для автокомплита и документации интерфейсов)</span>
                </li>
            </ul>
            <span className='text-xl'>Готовые Конфигурации</span>
            <ul className='px-2'>
                <li>
                    <a href='https://github.com/craftzdog/dotfiles-public' target='_blank' className='underline text-[#395B64] font-bold'>Craftzdog</a>
                </li>
                <li>
                    <a href='https://github.com/LunarVim/LunarVim/tree/master' target='_blank' className='underline text-[#395B64] font-bold'>LunarVim</a>
                </li>
                <li>
                    <a href='https://github.com/NvChad/NvChad' target='_blank' className='underline text-[#395B64] font-bold'>NvChad</a>
                </li>
            </ul>
        </div>
    </main>
}

export default NvimUsefulResources;
